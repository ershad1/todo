package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class TodoJpaResource {

  @Autowired
  private TodoHardCodedService todoHardCodedService;


  @Autowired
  private TodoRepository todoRepository;


  @GetMapping("/jpa/users/{username}/todos")
  public List<Todo> getAllTodos(@PathVariable String username) {
    return todoRepository.findByUsername(username);
  }

  @GetMapping("/jpa/users/{username}/todos/{id}")
  public Todo getTodo(@PathVariable String username, @PathVariable Long id) {
    return todoRepository.findById(id).get();
//    return todoHardCodedService.findById(id);
  }


  @DeleteMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
    Todo todo = todoHardCodedService.deleteById(id);
    if (todo != null) {
      return ResponseEntity.noContent().build();
    }
    return ResponseEntity.notFound().build();
  }

  @PutMapping("/jpa/users/{username}/todos/{id}")
  public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
    Todo updatedTodo = todoHardCodedService.save(todo);
    return new ResponseEntity<Todo>(todo, HttpStatus.OK);
  }

  @PostMapping("/jpa/users/{username}/todos")
  public ResponseEntity<Void> saveTodo(@PathVariable String username, @RequestBody Todo todo) {
    Todo createdTodo = todoHardCodedService.save(todo);

    //Location
    //Get current resource url
    //{id}
    URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
    return ResponseEntity.created(uri).build();
  }
}
