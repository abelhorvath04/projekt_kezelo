import React from 'react'

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="bg-primary bg-gradient">Projekt-kezelő &copy; {year}</footer>
  )
}
