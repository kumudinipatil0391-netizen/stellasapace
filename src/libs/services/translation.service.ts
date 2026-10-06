import { Injectable } from '@angular/core';
import pageContent from '../pages/en.json';

export type TranslationBundle = typeof pageContent;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  readonly value = pageContent;
}