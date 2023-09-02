export class Role{
    role: string = '';
    isSelected: boolean = false

    constructor(role: string, isSelected:boolean = false) {
        this.role = role;
        this.isSelected = isSelected;
    }
}
