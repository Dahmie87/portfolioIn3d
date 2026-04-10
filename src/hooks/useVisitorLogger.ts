// hooks/useVisitorLogger.ts
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useVisitorLogger() {
  const location = useLocation()

  useEffect(() => {
    logVisit(location.pathname)
  }, [location.pathname])

  async function logVisit(endpoint: string) {
    try {
      const ipRes = await fetch('https://ipapi.co/json/')
      const ipData = await ipRes.json()
      await fetch('http://localhost:8080/api/v1/log-visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ip: ipData.ip,
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