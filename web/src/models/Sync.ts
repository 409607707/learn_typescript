import axios, { AxiosPromise } from "axios";
import { UserProps } from './User'
/**
 * 由于 data和set()来自于User类，所以我们需要修复两个类之间的依赖关系
 */
export class Sync {
  constructor(public rootUrl: string) {

  }
  /**
   * Fetches some data from the server about a particular user
   */
   fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }
  /**
   * Saves some data about this user to the server
   */
  save(data: UserProps): AxiosPromise {
    const { id } = data
    if (id) {
      // put
     return axios.put(`${this.rootUrl}/${id}`, data)
    } else {
      // post
      return axios.post(`${this.rootUrl}`, data)
    }
  }
}