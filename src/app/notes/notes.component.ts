import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<User[]>('https://fakestoreapi.com/users').subscribe(data => {
      this.users = data;
    });
  }

  onUserChange(): void {
    console.log("Selected user ID:", this.selectedUserId);
  }
}