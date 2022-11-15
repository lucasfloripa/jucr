import { ICountry } from "."

export interface IAddressInfo {
  ID: number
  AddressLine1?: string
  AddressLine2?: string
  Town?: string
  StateOrProvince?: string
  PostCode?: string
  CountryID: string
  Country: ICountry
  Latitude: number
  Longitude: number
  ContactTelephone1?: string
  ContactTelephone2?: string
  ContactEmail?: string
  AccessComents?: string
  RelatedURL?: string
  Distance?: number
  DistanceUnit?: number
  Title?: string
}