import React, { useRef, useState, useEffect } from 'react'

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const sidebarRef = useRef(null)
  const bilolOpen = () => {
    setOpen(!open)
  }
  const bilolCloze = () => {
    setOpen(false)
  }
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])
  return (

    <div><button onClick={bilolOpen}>
      {open ? 'closebilol' : 'openbilol'}
    </button>
      {open &&
        <div ref={sidebarRef} className='sidebar'>
          <h1 onClick={bilolCloze}>close</h1>
          <input type="text" placeholder='write' />
          <h3>Tatyana_Osinski</h3>
          <h1>Dynamic Optimization Facilitator</h1>
          <h3>Green.Schowalter97</h3>
          <h1>Central Markets Strategist</h1>
        </div>}

    </div>
  )
}
