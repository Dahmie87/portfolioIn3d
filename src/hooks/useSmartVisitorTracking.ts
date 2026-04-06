// hooks/useSmartVisitorTracking.ts
import { useEffect, useRef } from 'react'
import {  useLocation } from 'react-router-dom'

export function useSmartVisitorTracking() {
  const location = useLocation()
  const sessionRef = useRef({
    sessionId: `${Date.now()}_${Math.random()}`,
    startTime: Date.now(),
    pages: [window.location.pathname],
    userAgent: navigator.userAgent
  })

  // Log visitor ONCE on first load
  useEffect(() => {
    logVisitorEntry()
  }, [])

  // Track page changes
  useEffect(() => {
    if (!sessionRef.current.pages.includes(location.pathname)) {
      sessionRef.current.pages.push(location.pathname)
    }
  }, [location.pathname])

  // Log session end when user leaves
  useEffect(() => {
    const handleBeforeUnload = () => {
      logSessionEnd()
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [])

  async function logVisitorEntry() {
    const ipRes = await fetch("http://ipapi,co/json/")
    const ipData = await ipRes.json()
    try {
      await fetch('http://localhost:8080/api/v1/log-visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ip: ipData.ip,
          user_agent: sessionRef.current.userAgent,
          endpoint: window.location.pathname,
          session_id: sessionRef.current.sessionId
        })
      })
      console.log('✓ Visitor logged')
    } catch (error) {
      console.error('Entry log error:', error)
    }
  }

  async function logSessionEnd() {
    try {
      const sessionDuration = Date.now() - sessionRef.current.startTime
      
      await fetch('http://localhost:8080/api/v1/log-session-end', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          session_id: sessionRef.current.sessionId,
          pages_visited: sessionRef.current.pages,
          time_spent_ms: sessionDuration,
          total_pages: sessionRef.current.pages.length
        })
      })
      console.log('✓ Session ended')
    } catch (error) {
      console.error('Session end log error:', error)
    }
  }
}