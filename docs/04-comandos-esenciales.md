# ⌨️ Comandos Esenciales

## 🚀 Comandos Básicos

### **Modo Interactivo**
```bash
# Iniciar Claude Code en modo interactivo
claude

# Continuar conversación anterior
claude --continue
claude -c

# Reanudar sesión específica por ID
claude --resume session-id-123
```

### **Modo Headless (Una sola consulta)**
```bash
# Ejecutar una consulta y salir
claude -p "¿Qué hace este proyecto?"
claude --print "Analiza este archivo"

# Con formato específico
claude -p "Lista archivos" --output-format json
```

### **Comandos de Gestión**
```bash
# Actualizar a la última versión
claude update

# Mostrar versión actual
claude --version

# Ayuda general
claude --help
```

## 🏷️ Flags Importantes

### **Flags de Modelo y Configuración**
```bash
# Especificar modelo para la sesión
claude --model sonnet     # Claude 3.5 Sonnet
claude --model opus       # Claude 3 Opus  
claude --model haiku      # Claude 3.5 Haiku

# Habilitar logging detallado
claude --verbose

# Modo de permisos específico
claude --permission-mode auto    # Automático
claude --permission-mode manual  # Manual
claude --permission-mode ask     # Preguntar siempre
```

### **Flags de Directorio y Contexto**
```bash
# Agregar directorios adicionales al contexto
claude --add-dir /path/to/extra/dir

# Especificar herramientas permitidas
claude --allowedTools bash,edit,read

# Saltar confirmaciones de permisos (¡usar con cuidado!)
claude --dangerously-skip-permissions
```

### **Flags de Salida**
```bash
# Formato de salida
claude --output-format text       # Texto plano (default)
claude --output-format json       # JSON estructurado
claude --output-format stream-json # JSON streaming

# Guardar log en archivo
claude --log-file debug.log
```

## 🎯 Slash Commands (Comandos Internos)

### **Comandos de Sesión**
```bash
# Dentro de una sesión de Claude Code:

/help          # Mostrar ayuda
/clear         # Limpiar contexto actual
/exit          # Salir de Claude Code
/quit          # Alias de /exit
```

### **Comandos de Configuración**
```bash
/model sonnet  # Cambiar modelo a Sonnet
/model opus    # Cambiar modelo a Opus
/model haiku   # Cambiar modelo a Haiku

/verbose on    # Activar modo verbose
/verbose off   # Desactivar modo verbose
```

### **Comandos de MCP**
```bash
/mcp           # Configurar servidores MCP
/mcp list      # Listar servidores configurados
/mcp add       # Agregar nuevo servidor MCP
/mcp remove    # Remover servidor MCP
```

### **Comandos de Utilidad**
```bash
/bug           # Reportar un bug
/feedback      # Enviar feedback
/version       # Mostrar versión actual
/status        # Estado de la sesión actual
```

## 💡 Patrones de Uso Común

### **Exploración de Codebase**
```bash
# Comandos típicos de exploración
"¿Qué hace este proyecto?"
"¿Qué tecnologías usa?"
"¿Dónde está el punto de entrada principal?"
"Muéstrame la estructura de carpetas"
"¿Cuáles son los archivos más importantes?"
```

### **Análisis de Código**
```bash
# Análisis y comprensión
"Explica esta función"
"¿Qué hace este componente React?"
"Analiza este archivo para bugs potenciales"
"¿Cómo funciona este algoritmo?"
"Documenta esta API"
```

### **Desarrollo y Modificación**
```bash
# Creación y modificación
"Agrega logging a esta función"
"Refactoriza este código para usar async/await"
"Convierte esta clase a un hook de React"
"Agrega validación de tipos a esta función"
"Crea un test unitario para este método"
```

### **Debugging y Fixes**
```bash
# Resolución de problemas
"Este código tiene un error, arréglalo"
"¿Por qué falla este test?"
"Optimiza esta consulta SQL"
"Arregla este problema de performance"
"¿Por qué no funciona esta función?"
```

## 🔧 Comandos Avanzados

### **Piping y Redirección**
```bash
# Usar con pipes
cat archivo.js | claude -p "Explica este código"
git diff | claude -p "Resume estos cambios"
npm test 2>&1 | claude -p "Analiza estos errores de test"

# Múltiples archivos
claude -p "Analiza estos archivos" --add-dir src/components
```

### **Configuración Persistent**
```bash
# Comandos de configuración global
claude config set model sonnet
claude config set verbose true
claude config set proxy http://proxy.com:8080

# Ver configuración actual
claude config show

# Reset configuración
claude config reset
```

### **Modo Batch**
```bash
# Ejecutar múltiples comandos desde archivo
echo "¿Qué hace este proyecto?" > commands.txt
echo "Lista los archivos principales" >> commands.txt
claude --batch commands.txt
```

## 🎨 Prompting Efectivo

### **Niveles de Pensamiento**
```bash
# Para problemas simples
"Arregla este bug"

# Para problemas moderados  
"think: ¿Cómo puedo optimizar esta función?"

# Para problemas complejos
"think hard: Diseña una arquitectura para este feature"

# Para problemas muy complejos
"think harder: Refactoriza esta aplicación completa"

# Para análisis exhaustivo
"ultrathink: Analiza todas las implicaciones de este cambio"
```

### **Comandos Específicos por Tarea**

#### **Refactoring**
```bash
"Refactoriza src/utils.js para usar ES6+"
"Convierte estos componentes de clase a hooks"
"Moderniza este código legacy"
```

#### **Testing**
```bash
"Crea tests unitarios para src/auth.js"
"Agrega tests de integración para la API"
"Genera mocks para estas dependencias"
```

#### **Documentación**
```bash
"Documenta todas las funciones públicas"
"Crea README para este proyecto"
"Genera JSDoc para estos métodos"
```

#### **Performance**
```bash
"Optimiza este componente React"
"Mejora el performance de esta consulta"
"Reduce el bundle size"
```

## 🔄 Workflows de Comandos

### **Workflow de Debug**
```bash
# 1. Identificar problema
"Analiza este error: [error message]"

# 2. Investigar causas
"¿Qué puede estar causando este problema?"

# 3. Proponer solución
"think: ¿Cuál es la mejor forma de arreglar esto?"

# 4. Implementar fix
"Implementa la solución"

# 5. Verificar
"Ejecuta los tests para verificar el fix"
```

### **Workflow de Feature**
```bash
# 1. Planificación
"think hard: Diseña un sistema de autenticación JWT"

# 2. Implementación incremental
"Implementa el modelo de usuario"
"Agrega el middleware de autenticación"
"Crea los endpoints de login/logout"

# 3. Testing
"Crea tests para el sistema de auth"

# 4. Documentación
"Documenta la API de autenticación"
```

## 📝 Tips y Trucos

### **Optimización de Contexto**
```bash
# Limpiar contexto frecuentemente para mejor performance
/clear

# Ser específico con las ubicaciones
"Analiza src/components/UserCard.jsx"
# Mejor que: "Analiza el componente de usuario"
```

### **Comandos de Productividad**
```bash
# Combinar múltiples tareas
"Refactoriza utils.js, agrega tests y documenta las funciones"

# Usar patrones de archivos
"Actualiza todos los archivos *.test.js para usar Jest 29"

# Comandos contextuales
"Basándote en el archivo que acabas de crear, agrega validación"
```

### **Gestión de Errores**
```bash
# Si Claude Code falla o se comporta mal
/clear           # Limpiar contexto
/model sonnet    # Cambiar modelo
/verbose on      # Activar debug
```

---

*Estos comandos te ayudarán a aprovechar al máximo Claude Code. Practica con proyectos reales para dominar estas herramientas.*