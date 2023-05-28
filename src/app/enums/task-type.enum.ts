export enum TaskTypeEnum {
  WASH_DISHES = 'wash-dishes',
  VACUUM_CLEAN = 'vacuum-clean'
}

export const TaskTypeTransaltions: Record<TaskTypeEnum, string> = {
  [TaskTypeEnum.WASH_DISHES]: 'Wash dishes',
  [TaskTypeEnum.VACUUM_CLEAN]: 'Vacuum clean',
}
