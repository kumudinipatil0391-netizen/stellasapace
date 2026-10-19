import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { blogArticles } from './blog-content';

@Component({
  selector: 'app-blogs-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.scss']
})
export class BlogsPageComponent {
  readonly articles = blogArticles;
}
