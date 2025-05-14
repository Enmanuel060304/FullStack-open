sequenceDiagram
participant Usuario
participant NavegadorSPA as Navegador (SPA)
participant Servidor
participant BaseDeDatos

    Usuario->>NavegadorSPA: Escribe texto en el campo y hace clic en "Save"
    note right of NavegadorSPA
      // Manejador de evento en JS captura el click
      // Lee el valor del <input>
      // Actualiza estado local (optimista)
      // Prepara fetch()
    end

    NavegadorSPA->>Servidor: POST /api/notes\n{ content: "Mi nueva nota" }
    note right of Servidor
      // Express recibe la petición
      // JSON.parse(req.body)
      // Note.create({ content })
    end

    Servidor->>BaseDeDatos: INSERT INTO notes (content) VALUES ("Mi nueva nota")
    BaseDeDatos-->>Servidor: { id: 124, content: "Mi nueva nota", date: "2025-05-14T12:45:00Z" }

    Servidor-->>NavegadorSPA: 201 Created\n{ id: 124, content, date }
    note left of NavegadorSPA
      // fetch().then(res.json())
      // Actualiza estado global/contexto con la nota real
      // Vuelve a renderizar la lista de notas
    end

    NavegadorSPA->>Usuario: Muestra la nueva nota en la lista sin recarga de página
