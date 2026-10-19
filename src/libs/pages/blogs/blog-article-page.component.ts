import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { blogArticles } from './blog-content';

@Component({
  selector: 'app-blog-article-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-article-page.component.html',
  styleUrls: ['./blog-article-page.component.scss']
})
export class BlogArticlePageComponent {
  readonly article = blogArticles.find(
    article => article.slug === this.route.snapshot.paramMap.get('slug')
  );

  constructor(private readonly route: ActivatedRoute) {}
}
