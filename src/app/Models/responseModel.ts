import { ResponseCode } from "../enum/responseCode";

export class ResponseModel{
    responseCode: ResponseCode = ResponseCode.NotSet;
    responseMessage: string = "";
    dataSet : any;
}