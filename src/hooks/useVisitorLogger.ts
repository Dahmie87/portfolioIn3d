// hooks/useVisitorLogger.ts
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function useVisitorLogger() {
  const location = useLocation()
  const ipRef = useRef<string | null>(null)

  // Get IP once on first load
  useEffect(() => {
    if (!ipRef.current) {
      fetchIP()
    }
  }, [])

  // Log every page visit with cached IP
  useEffect(() => {
    if (ipRef.current) {
      logVisit(location.pathname)
    }
  }, [location.pathname])

  async function fetchIP() {
    try {
      const ipRes = await fetch('https://ipapi.co/json/')
      const ipData = await ipRes.json()
      ipRef.current = ipData.ip
      console.log('IP cached:', ipData.ip)
    } catch (error) {
      console.error('IP fetch error:', error)
      ipRef.current = 'unknown' // Fallback
    }
  }

  async function logVisit(endpoint: string) {
    try {
      await fetch('http://localhost:8080/api/v1/log-visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ip: ipRef.current,
          user_agent: navigator.userAgent,
          endpoint: endpoint
        })
      })
      console.log('Logged:', endpoint)
    } catch (error) {
      console.error('Log error:', error)
    }
  }
}