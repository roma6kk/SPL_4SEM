abstract class BaseUser {
    abstract getRole() : string;
    id : number;
    name : string;    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    abstract getPermissions(): string[];

}
class Guest extends BaseUser
{
    public getRole(): string {
        return "Гость"
    }
    public getPermissions(): string[] {
        return ["Просмотр контента"]
    }
}
class User extends BaseUser
{
    public getRole(): string {
        return "Пользователь"
    }
    public getPermissions(): string[] {
        return ["Просмотр контента", "Добавление комментариев"]
    }
}
class Admin extends BaseUser
{
    public getRole(): string {
        return "Администратор"
    }
    public getPermissions(): string[] {
        return ["Просмотр контента", "Добавление комментариев",
                "Удаление комментариев", "Управление пользователями"
        ]
    }
}
const guest = new Guest(1, "Аноним");
console.log(guest.getPermissions()); 

const admin = new Admin(2, "Мария");

console.log(admin.getPermissions());