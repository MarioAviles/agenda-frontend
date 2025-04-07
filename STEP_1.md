### Prueba Técnica: Aplicación de Gestión de Tareas

#### Objetivo
Crear una aplicación simple de gestión de tareas donde los usuarios puedan agregar, editar, eliminar y ver tareas.

#### Requisitos
- **Backend**: Java Spring Boot
- **Frontend**: TypeScript con React

### Pasos

#### Backend (Java Spring Boot)

1. **Configuración del Proyecto**
   - Crear un nuevo proyecto Spring Boot utilizando Spring Initializr.
   - Incluir dependencias: Spring Web, Spring Data JPA, H2 Database.

2. **Modelo de Datos**
   - Crear una clase `Task` con los siguientes atributos:
     ```java
     @Entity
     public class Task {
         @Id
         @GeneratedValue(strategy = GenerationType.IDENTITY)
         private Long id;
         private String title;
         private String description;
         private boolean completed;
         
         // Getters y Setters
     }
     ```

3. **Repositorio**
   - Crear una interfaz `TaskRepository` que extienda `JpaRepository`:
     ```java
     public interface TaskRepository extends JpaRepository<Task, Long> {
     }
     ```

4. **Controlador**
   - Crear un controlador `TaskController` con endpoints para CRUD:
     ```java
     @RestController
     @RequestMapping("/tasks")
     public class TaskController {
         @Autowired
         private TaskRepository taskRepository;

         @GetMapping
         public List<Task> getAllTasks() {
             return taskRepository.findAll();
         }

         @PostMapping
         public Task createTask(@RequestBody Task task) {
             return taskRepository.save(task);
         }

         @PutMapping("/{id}")
         public Task updateTask(@PathVariable Long id, @RequestBody Task taskDetails) {
             Task task = taskRepository.findById(id).orElseThrow();
             task.setTitle(taskDetails.getTitle());
             task.setDescription(taskDetails.getDescription());
             task.setCompleted(taskDetails.isCompleted());
             return taskRepository.save(task);
         }

         @DeleteMapping("/{id}")
         public void deleteTask(@PathVariable Long id) {
             taskRepository.deleteById(id);
         }
     }
     ```

5. **Base de Datos**
   - Configurar H2 Database en `application.properties`:
     ```properties
     spring.datasource.url=jdbc:h2:mem:testdb
     spring.datasource.driverClassName=org.h2.Driver
     spring.datasource.username=sa
     spring.datasource.password=password
     spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
     ```

#### Frontend (TypeScript con React)

1. **Configuración del Proyecto**
   - Crear un nuevo proyecto React utilizando `create-react-app` con TypeScript:
     ```bash
     npx create-react-app task-manager --template typescript
     ```

2. **Componentes**
   - Crear componentes `TaskList`, `TaskForm`, y `TaskItem`.

3. **API Service**
   - Crear un servicio para interactuar con el backend:
     ```typescript
     import axios from 'axios';

     const API_URL = 'http://localhost:8080/tasks';

     export const getTasks = async () => {
         return await axios.get(API_URL);
     };

     export const createTask = async (task: any) => {
         return await axios.post(API_URL, task);
     };

     export const updateTask = async (id: number, task: any) => {
         return await axios.put(`${API_URL}/${id}`, task);
     };

     export const deleteTask = async (id: number) => {
         return await axios.delete(`${API_URL}/${id}`);
     };
     ```

4. **Integración**
   - Utilizar el servicio API en los componentes para realizar las operaciones CRUD.

### Documentación
Si tienes dudas sobre Spring Boot, puedes consultar la documentación oficial. Para React y TypeScript, la documentación de React y la documentación de TypeScript serán útiles.
