import { useEffect, useState } from "react";
import { ModelType } from "../../types/ModelType";
import { useNavigate, useParams } from "react-router-dom";
import * as api from '../../lib/api';



function ModelDetail(){
    const [model, setModels] = useState<ModelType>();
    const navigate = useNavigate();

    const modelId = useParams<{ modelId: string}>();

    useEffect(() => {
        api.loadModelbyId(modelId.modelId || "").then((res) => {
            setModels(res);
        });
    }, [modelId.modelId])

  return (
    <>
    </>
  )


}

export default ModelDetail;
