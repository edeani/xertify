export class VerifyModel {

  public code: string;
  public date: string;
  public branch: string;
  public branchId: string;
  public group: string;
  public groupId: string;
  public templateName: string;
  public templateId: string;
  public firstName: string;
  public lastName: string;
  public documentType: string;
  public documentNumber: string;
  public email: string;

  constructor(code: string, date: string, branch: string, branchId: string, group: string, templateName: string, templateId: string
            , firstName: string, lastName: string, documentType: string, documentNumber: string, email: string , groupId: string ) {
    this.code = code;
    this.date = date;
    this.branch = branch;
    this.branchId = branchId;
    this.group = group;
    this.groupId = groupId;
    this.templateId = templateId;
    this.templateName = templateName;
    this.firstName = firstName;
    this.lastName = lastName;
    this.documentType = documentType;
    this.documentNumber = documentNumber;
    this.email = email;
  }

}
