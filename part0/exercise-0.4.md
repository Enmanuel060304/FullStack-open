sequenceDiagram
participant Usuario
participant Navegador
participant Servidor
participant BaseDeDatos

    Usuario->>Navegador: Escribe texto en el campo y hace clic en "Save"
    note right of Navegador
      // Captura el evento click
      // Lee el valor del <input>
      // Prepara una petición fetch()
    end

    Navegador->>Servidor: POST /api/notes\n{ content: "Mi nueva nota" }
    note right of Servidor
      // Express recibe la petición
      // JSON.parse(req.body)
      // Note.create({ content })
    end

    Servidor->>BaseDeDatos: INSERT INTO notes (content) VALUES ("Mi nueva nota")
    BaseDeDatos-->>Servidor: { id: 123, content: "Mi nueva nota", date: "2025-05-14T12:34:56Z" }

    Servidor-->>Navegador: 201 Created\n{ id: 123, content, date }
    note left of Navegador
      // fetch().then(res.json())
      // Actualiza el estado de React/Vue/DOM
    end

    Navegador->>Usuario: Muestra la nueva nota en la lista
