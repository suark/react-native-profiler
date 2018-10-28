import now from 'performance-now'
import { ComponentType } from 'react'
interface objectWithStringIndex {
  [key:string] : any
}

function RNProfiler(component: ComponentType & objectWithStringIndex) {
  const componentName = component.displayName || 'Component'
  console.log(`Profiling: ${componentName}`)

  const ownPropertyNames = Object.getOwnPropertyNames(Object.getPrototypeOf(component))
  ownPropertyNames.forEach((propertyName) => {
    const property = component[propertyName]
    if (typeof  property === 'function') {
      component[propertyName] = function () {
        const start = now()
        const result = property.apply(component, arguments)
        const difference = now() - start
        console.log(`${componentName}: ${propertyName}: ${difference.toFixed(3)}ms`)
        return result
      }
    }
  })
}

export default RNProfiler