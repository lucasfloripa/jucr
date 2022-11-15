import { IAddressInfo } from ".";

export interface IOperatorInfo {
  ID: number
  WebSiteURL?: string;
  Comments?: string;
  PhonePrimaryContact?: string;
  PhoneSecondaryContact?: string;
  IsPrivateIndividual?: boolean;
  AddressInfo?: IAddressInfo;
  BookingUrl?: string;
  ContactEmail?: string;
  FaultReportEmail?: string;
  IsRestrictedEdit?: string;
  Title?: string;
}