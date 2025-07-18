# 🔄 Workflows y Técnicas Avanzadas

## 🎯 Workflows Comunes

### **1. Debug y Fix de Issues**

#### **Workflow Completo de Debugging**
```bash
# Paso 1: Identificar el problema
"Analiza este error: TypeError: Cannot read property 'id' of undefined"

# Paso 2: Investigar contexto
"Busca dónde se usa la propiedad 'id' en el archivo users.js"

# Paso 3: Análisis profundo
"think: ¿Qué puede estar causando que el objeto sea undefined?"

# Paso 4: Proponer solución
"Sugiere 3 formas de arreglar este problema"

# Paso 5: Implementar fix
"Implementa la solución más robusta"

# Paso 6: Verificar
"Ejecuta los tests relacionados para verificar el fix"
```

#### **Debugging de Performance**
```bash
# Identificar cuellos de botella
"Analiza el performance de esta función y identifica problemas"

# Profiling detallado
"think hard: ¿Cómo puedo optimizar esta consulta SQL?"

# Implementar optimizaciones
"Refactoriza este código para mejorar el performance"

# Medir impacto
"Crea un benchmark para medir la mejora"
```

### **2. Refactoring de Código**

#### **Refactoring Incremental**
```bash
# Paso 1: Análisis inicial
"Analiza este archivo legacy y identifica problemas de código"

# Paso 2: Planificación
"think: Crea un plan de refactoring paso a paso"

# Paso 3: Modernización gradual
"Convierte estas funciones de ES5 a ES6+ una por una"

# Paso 4: Extracción de funciones
"Extrae la lógica repetida en funciones reutilizables"

# Paso 5: Optimización de tipos
"Agrega tipos TypeScript a todas las funciones"

# Paso 6: Tests de regresión
"Crea tests para asegurar que el refactoring no rompa nada"
```

#### **Migración de Tecnologías**
```bash
# Migración de JavaScript a TypeScript
"think harder: Planifica la migración completa de JS a TS"
"Convierte src/utils.js a TypeScript manteniendo compatibilidad"
"Agrega tipos estrictos gradualmente"

# Migración de Class Components a Hooks
"Convierte este componente de clase a hooks de React"
"Optimiza el componente resultante"
"Agrega tests para el componente migrado"
```

### **3. Generación de Documentación**

#### **Documentación Automática**
```bash
# Documentación de APIs
"Genera documentación OpenAPI para todos los endpoints de /api"

# JSDoc completo
"Agrega JSDoc detallado a todas las funciones públicas"

# README comprensivo
"Crea un README completo con instalación, uso y ejemplos"

# Guías de contribución
"Genera un CONTRIBUTING.md con las convenciones del proyecto"
```

#### **Documentación Técnica**
```bash
# Arquitectura del sistema
"think hard: Documenta la arquitectura completa del sistema"

# Diagramas de flujo
"Describe el flujo de datos desde el frontend hasta la base de datos"

# Guías de deployment
"Crea una guía paso a paso para el deployment en producción"
```

### **4. Análisis de Codebase**

#### **Análisis Completo de Proyecto**
```bash
# Comprensión inicial
"¿Qué hace este proyecto y cómo está estructurado?"

# Análisis de dependencias
"Analiza package.json e identifica dependencias desactualizadas"

# Identificación de patrones
"¿Qué patrones de diseño se usan en este proyecto?"

# Detección de code smells
"Identifica problemas de calidad de código en toda la aplicación"

# Métricas de complejidad
"think: Analiza la complejidad ciclomática de las funciones principales"
```

#### **Auditoría de Seguridad**
```bash
# Análisis de vulnerabilidades
"Busca vulnerabilidades de seguridad en el código"

# Revisión de dependencias
"Audita las dependencias npm en busca de vulnerabilidades"

# Validación de inputs
"Verifica que todos los inputs del usuario estén validados"

# Análisis de autenticación
"Revisa la implementación de autenticación y autorización"
```

## 🔧 Técnicas de Corrección Iterativa

### **Approach de "Divide y Vencerás"**
```bash
# Para problemas complejos, dividir en partes
"Este bug es complejo. Analicemos paso a paso:"
"1. ¿Qué debería pasar?"
"2. ¿Qué está pasando realmente?"
"3. ¿Dónde está la diferencia?"
"4. ¿Cuál es la causa raíz?"

# Implementar fixes incrementales
"Arregla primero la validación de entrada"
"Ahora optimiza el procesamiento de datos"
"Finalmente mejora el manejo de errores"
```

### **Técnica de Rubber Duck Debugging**
```bash
# Explicar el problema en detalle
"Explícame qué hace este código línea por línea"

# Identificar inconsistencias
"¿Hay algo que no tenga sentido en esta explicación?"

# Proponer hipótesis
"think: ¿Cuáles son las 3 causas más probables de este error?"
```

## 🤖 Uso de Subagents para Problemas Complejos

### **Delegación de Tareas Específicas**
```bash
# Agente especializado en testing
"Actúa como un expert en testing. Crea una suite completa de tests para este módulo"

# Agente de arquitectura
"Actúa como arquitecto de software. Diseña la estructura para este nuevo feature"

# Agente de seguridad
"Actúa como experto en seguridad. Audita este código en busca de vulnerabilidades"

# Agente de performance
"Actúa como especialista en performance. Optimiza este código para máxima eficiencia"
```

### **Workflows Paralelos**
```bash
# Múltiples tareas simultáneas
"Mientras revisas la seguridad del módulo de auth, también:"
"- Optimiza las consultas de base de datos"
"- Actualiza la documentación"
"- Crea tests de integración"
```

## 🧠 Gestión de Contexto

### **Estrategias de Context Management**
```bash
# Limpiar contexto frecuentemente
/clear

# Resumir estado actual antes de continuar
"Resume el progreso actual del refactoring"

# Crear checkpoints
"Guarda un checkpoint del estado actual antes de continuar"

# Contexto focalizado
"Enfócate únicamente en el módulo de autenticación por ahora"
```

### **Técnicas de Memory Management**
```bash
# Crear notas de progreso
"Crea una lista de lo que hemos completado hasta ahora"

# Documentar decisiones
"Documenta por qué elegimos esta aproximación"

# Planificación explícita
"think: Crea un roadmap detallado para los próximos pasos"
```

## 🎨 Prompting Efectivo Avanzado

### **Niveles de Pensamiento Estratégico**
```bash
# Para análisis superficial
"Revisa este código"

# Para análisis moderado
"think: Analiza este código e identifica mejoras"

# Para análisis profundo
"think hard: Evalúa completamente esta arquitectura"

# Para análisis exhaustivo
"think harder: Analiza todas las implicaciones de este cambio"

# Para análisis ultra-profundo
"ultrathink: Considera todos los aspectos técnicos, de negocio y de mantenibilidad"
```

### **Prompting Contextual**
```bash
# Especificar rol y contexto
"Como senior developer de esta empresa fintech, revisa este código de pagos"

# Definir constrainintes
"Optimiza este código manteniendo compatibilidad con IE11"

# Establecer objetivos claros
"Refactoriza este componente para reducir el bundle size en 30%"
```

### **Prompting Multi-paso**
```bash
# Estructurar tareas complejas
"Primero analiza el problema, luego propón 3 soluciones, después implementa la mejor"

# Validación en cada paso
"Después de cada cambio, ejecuta los tests y verifica que todo funcione"

# Iteración controlada
"Haz estos cambios uno por uno, pidiendo confirmación antes de continuar"
```

## ⚡ Hooks para Automatización

### **Pre-Tool Use Hooks**
```bash
# En .claude/hooks/pre-tool-use.sh
#!/bin/bash
echo "🔍 Ejecutando: $CLAUDE_TOOL_NAME"
if [ "$CLAUDE_TOOL_NAME" = "edit" ]; then
    echo "📝 Editando archivo: $CLAUDE_FILE_PATH"
fi
```

### **Post-Tool Use Hooks**
```bash
# En .claude/hooks/post-tool-use.sh
#!/bin/bash
if [ "$CLAUDE_TOOL_NAME" = "edit" ]; then
    # Auto-formatear después de editar
    npx prettier --write "$CLAUDE_FILE_PATH"
    
    # Ejecutar linter
    npx eslint "$CLAUDE_FILE_PATH" --fix
    
    echo "✨ Archivo formateado y linted automáticamente"
fi
```

### **Notification Hooks**
```bash
# En .claude/hooks/notification.sh
#!/bin/bash
# Enviar notificación cuando se complete una tarea importante
if [[ "$CLAUDE_MESSAGE" == *"completado"* ]]; then
    osascript -e 'display notification "Tarea completada" with title "Claude Code"'
fi
```

### **Stop Hooks**
```bash
# En .claude/hooks/stop.sh
#!/bin/bash
# Ejecutar tests antes de terminar sesión
echo "🧪 Ejecutando tests finales..."
npm test
if [ $? -eq 0 ]; then
    echo "✅ Todos los tests pasaron"
else
    echo "❌ Hay tests fallando"
fi
```

## 🔄 Workflows de Integración Continua

### **Workflow de Development**
```bash
# 1. Análisis inicial
"Analiza los cambios en el último commit"

# 2. Validación
"Ejecuta todos los tests y verifica que pasen"

# 3. Code review automático
"Revisa el código cambiado e identifica posibles problemas"

# 4. Optimización
"Sugiere mejoras para el código nuevo"

# 5. Documentación
"Actualiza la documentación si es necesario"
```

### **Workflow de Release**
```bash
# Pre-release checks
"think hard: Verifica que todo esté listo para el release"
"Ejecuta los tests de integración completos"
"Revisa que no haya TODOs o FIXMEs críticos"

# Release preparation
"Actualiza el CHANGELOG.md con los cambios"
"Incrementa la versión en package.json"
"Genera las release notes"

# Post-release validation
"Verifica que el deployment fue exitoso"
"Ejecuta smoke tests en producción"
```

## 📊 Métricas y Monitoreo

### **Tracking de Progreso**
```bash
# Métricas de código
"Analiza métricas de complejidad antes y después del refactoring"

# Coverage de tests
"Verifica que el coverage de tests no haya disminuido"

# Performance benchmarks
"Ejecuta benchmarks para medir el impacto de los cambios"
```

### **Quality Gates**
```bash
# Definir criterios de calidad
"Este código debe tener:"
"- 90%+ test coverage"
"- Complejidad ciclomática < 10"
"- 0 vulnerabilidades de seguridad"
"- Performance dentro del 5% del baseline"
```

---

*Estos workflows avanzados te ayudarán a manejar proyectos complejos de forma sistemática y eficiente con Claude Code.*