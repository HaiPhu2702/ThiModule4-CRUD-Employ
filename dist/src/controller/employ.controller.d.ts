declare class EmployController {
    static getListEmployAll(req: any, res: any): Promise<any>;
    static getAdd(req: any, res: any): void;
    static postAdd(req: any, res: any): Promise<void>;
    static deteteEmploy(req: any, res: any): Promise<void>;
    static getUpdate(req: any, res: any): Promise<void>;
    static postUpdate(req: any, res: any): Promise<void>;
    static detailEmploy(req: any, res: any): Promise<void>;
}
export default EmployController;
