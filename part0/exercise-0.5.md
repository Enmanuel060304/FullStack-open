sequenceDiagram
participant Usuario
participant Navegador
participant Servidor
participant BaseDeDatos

    Usuario->>Navegador: Abre https://.../spa
    note right of Navegador
      // GET /spa
      // Carga index.html
    end

    Navegador->>Servidor: GET /spa/index.html
    Servidor-->>Navegador: index.html + referencias a JS/CSS

    Navegador->>Servidor: GET /spa/static/js/main.js
    Servidor-->>Navegador: main.js

    Navegador->>Servidor: GET /spa/static/css/main.css
    Servidor-->>Navegador: main.css

    note right of Navegador
      // Browser ejecuta JavaScript
      // Inicializa framework (React/Vue/etc.)
      // Renderiza componente raíz
    end

    Navegador->>Servidor: GET /api/notes
    note right of Servidor
      // Express maneja GET /api/notes
      // Note.findAll()
    end

    Servidor->>BaseDeDatos: SELECT * FROM notes
    BaseDeDatos-->>Servidor: [ {id:1,content, date}, ... ]

    Servidor-->>Navegador: 200 OK\n[ {id:1,content, date}, ... ]
    note left of Navegador
      // fetch().then(res.json())
      // Actualiza estado del SPA (estado global o contexto)
      // Renderiza lista de notas en la misma página
    end

    Navegador->>Usuario: Muestra lista de notas sin recarga de página
