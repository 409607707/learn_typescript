import axios, { AxiosResponse } from "axios";
/**
 * 由于 data和set()来自于User类，所以我们需要修复两个类之间的依赖关系
 */
export class Sync {
  /**
   * Fetches some data from the server about a particular user
   */
   fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
    .then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }
  /**
   * Saves some data about this user to the server
   */
  save(): void {
    const id = this.get('id')
    if (id) {
      // put
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      // post
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}