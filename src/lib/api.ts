import { ModelType } from "../types/ModelType";
import { axiosGet,axiosPost } from "./http";

export const loadModelList = async (): Promise<ModelType[]> => {
    const res = await axiosGet('/Models');
    return res.data.models
};

export const loadModelbyId = async (modelId: string): Promise<ModelType> => {
    const res = await axiosGet(`/Models/${modelId}`);
    return res.data.model
};

export const createModel = async (body: ModelType): Promise<ModelType> => {
    const res = await axiosPost('/Models',body);
    return res.data
};

