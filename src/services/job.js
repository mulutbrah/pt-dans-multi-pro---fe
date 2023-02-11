import api from "./index";

export default {
  get(data) {
    return api.post("/jobs", data);
  },

  getOne(id) {
    return api.get(`/jobs/${id}`);
  },
};
