import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class StorageService {

  constructor(private storage: LocalStorageService) {
  }

  store(key: string, value: any): void {
		this.storage.store(key, value);
  }

  retrieve(key: string): any {
		return this.storage.retrieve(key);
  }

  clear(key?: string): void {
		this.storage.clear(key);
  }

  observe(key?: string): any {
		return this.storage.observe(key);
  }
}