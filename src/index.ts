// import now from 'performance-now'
import { ComponentType } from 'react'

function RNProfiler(component: ComponentType) {
  const componentName = component.displayName
  console.log(`Profiling: ${componentName}`)
  const names = Object.getOwnPropertyNames(Object.getPrototypeOf(component))
  names.forEach((func) => {
    
  })
}

export default RNProfiler