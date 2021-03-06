import { Contact } from '../models/contact';
import { of } from 'rxjs';

export class ContactServiceMock {
	constructor() {
		spyOn(this as ContactServiceMock, 'getContacts').and.returnValue(of([]));
		spyOn(this as ContactServiceMock, 'addContact');
		// see also: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/36661
	}

	getContacts() {
		return null;
	}

	addContact(newContact: Contact) {
		return null;
	}
}
