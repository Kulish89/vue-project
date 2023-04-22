import { TrackOpTypes } from "vue";
import { createStore } from "vuex";

export type TaskType = {
  id: string;
  title: string;
  body: string;
  status: "toDo" | "doing" | "done";
};

export type StateType = {
  tasks: Array<TaskType>;
};

export default createStore({
  state: {
    tasks: [],
  } as StateType,
  getters: {
    TASKS: (state) => {
      return state.tasks;
    },
  },
  mutations: {
    SET_TASKS: (state, payload) => {
      state.tasks = payload;
    },
    ADD_TASK: (state, task) => {
      // @ts-ignore
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    REMOVE_TASK: (state, id) => {
      // @ts-ignore
      state.tasks = state.tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    CHANGE_TASK_STATUS: (state, payload) => {
      // @ts-ignore
      state.tasks = state.tasks.map((task: TaskType) => {
        return task.id === payload.taskId
          ? { ...task, status: payload.columnStatus }
          : { ...task };
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    UPDATE_TASK: (state, payload) => {
      // @ts-ignore
      state.tasks = state.tasks.map((task: TaskType) => {
        return task.id === payload.id
          ? { ...task, title: payload.title, body: payload.body }
          : { ...task };
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    GET_TASKS: async (context, payload) => {
      if (localStorage.getItem("tasks")) {
        // @ts-ignore
        let data = JSON.parse(localStorage.getItem("tasks"));
        context.commit("SET_TASKS", data);
      } else {
        localStorage.setItem("tasks", JSON.stringify([]));
      }
    },
    ADD_TASK: async (context, payload) => {
      // let {data} = await Axios.post('http://yourwebsite.com/api/todo') async code
      context.commit("ADD_TASK", payload);
    },
    DELETE_TASK: async (context, id) => {
      // let {data} = await Axios.post('http://yourwebsite.com/api/todo'); async code
      context.commit("REMOVE_TASK", id);
    },
    CHANGE_TASK_STATUS: async (
      context,
      {
        taskId,
        columnStatus,
      }: { taskId: string; columnStatus: "toDo" | "doing" | "done" }
    ) => {
      // acync code

      context.commit("CHANGE_TASK_STATUS", { taskId, columnStatus });
    },
    UPDATE_TASK: async (context, payload) => {
      // acync code

      context.commit("UPDATE_TASK", payload);
    },
  },
  modules: {},
});
