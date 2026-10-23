class User {
    static count: number = 0;

    private _name: string;
    private readonly _login: string;
    private _password: string;

    constructor(name: string, login: string, password: string) {
        this._name = name;
        this._login = login;
        this._password = password;
        User.count++;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get login(): string {
        return this._login;
    }

    set password(value: string) {
        this._password = value;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}`);
    }
}

class SuperUser extends User {
    static count: number = 0;

    private _role: string;

    constructor(name: string, login: string, password: string, role: string) {
        super(name, login, password);
        this._role = role;
        SuperUser.count++;
    }

    get role(): string {
        return this._role;
    }

    set role(value: string) {
        this._role = value;
    }

    showInfo(): void {
        console.log(`Name: ${this.name}, Login: ${this.login}, Role: ${this.role}`);
    }
}

const user1 = new User("Paul McCartney", "paul", "1234");
const user2 = new User("George Harrison", "george", "5678");
const user3 = new User("Richard Starkey", "ringo", "8523");
const admin = new SuperUser("John Lennon", "john", "0000", "admin");

user1.showInfo();
admin.showInfo();

console.log(`Всего обычных пользователей: ${User.count}`);
console.log(`Всего супер-пользователей: ${SuperUser.count}`);

user3.name = "Ringo Starr";
user1.password = "Pa$$w0rd";

console.log(user3.name);
console.log(user2.login);
