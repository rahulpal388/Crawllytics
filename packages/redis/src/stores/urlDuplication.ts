import { RedisClientType } from "redis";

export class urlDuplicationStoreConfig {

  constructor(
    private readonly redisClient: RedisClientType
  ) { }
  private generateKey(projectId: string) {
    return `urlDuplication:${projectId}`;
  }
  async add(projectId: string, value: string[]) {
    const key = this.generateKey(projectId)
    return await this.redisClient.sAdd(key, value);
  }

  async isMember(projectId: string, value: string) {
    const key = this.generateKey(projectId)

    const response = await this.redisClient.sIsMember(key, value);
    return response == 1;
  }

  async remove(projectId: string) {
    const key = this.generateKey(projectId)
    return await this.redisClient.del(key);
  }

}
