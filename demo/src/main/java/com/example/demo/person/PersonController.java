package com.example.demo.person;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
@CrossOrigin(origins = "http://localhost:4200") // Angular port
public class PersonController {

    private final PersonRepository repo;

    public PersonController(PersonRepository repo) {
        this.repo = repo;
    }

    // GET /api/persons
    @GetMapping
    public List<Person> getAll() {
        return repo.findAll();
    }

    // GET /api/persons/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Person> getOne(@PathVariable Long id) {
        return repo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build()); // 404
    }

    // POST /api/persons
    @PostMapping
    public ResponseEntity<Person> create(@RequestBody Person p) {
        Person saved = repo.save(p);
        return ResponseEntity.status(201).body(saved); // 201
    }

    // PUT /api/persons/{id}
    @PutMapping("/{id}")
    public ResponseEntity<Person> update(@PathVariable Long id, @RequestBody Person p) {
        return repo.findById(id).map(existing -> {
            existing.setFirstName(p.getFirstName());
            existing.setFamilyName(p.getFamilyName());
            existing.setAge(p.getAge());
            existing.setAddress(p.getAddress());

            Person saved = repo.save(existing);
            return ResponseEntity.ok(saved); // 200
        }).orElse(ResponseEntity.notFound().build()); // 404
    }

    // DELETE /api/persons/{id}
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            return ResponseEntity.notFound().build(); // 404
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build(); // 204
    }
}
