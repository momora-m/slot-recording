import { useEffect, useState } from "react";
import { ModelType } from "../../types/ModelType";
import { useNavigate } from "react-router-dom";
import * as api from '../../lib/api';
import { Box, Button } from "@mui/material";



function ModelList() {
    const [models, setModels] = useState([] as ModelType[]);
    const navigate = useNavigate();
    const [showMore, setShowMore] = useState(false);
    const showLimitSize = 5;

    const handleShowMore = () => {
        setShowMore(true);
    };

    const handleModelInfo = (modelId :string) => {
        navigate(`/model/${modelId}`);
    }

    useEffect(() => {
        api.loadModelList().then((res) => {
            setModels(res);
        });
    }, []);

    return (
        <>
        {models && models.map((model, index) => {
            if (!showMore && index >= showLimitSize) {
                return;
            } else {
                return(
                    <Box display={'flex'} borderBottom={'2px solid #000'} py={1}>
                        <Button
                            onClick={() => handleModelInfo(model.model_id)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                textAlign: 'left',
                            }}
                        >
                        <Box>
                            <Box
                                sx={{
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    width: '180px',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    textAlign: 'left'
                                }}
                            >
                                {model.model_name}
                            </Box> 
                        </Box>
                        </Button>
                    </Box>
                );
            }
        })}
        {!showMore && models.length > showLimitSize && (
            <Box display={'flex'} sx={{ width: '100%', justifyContent: 'center'}}>
                <Button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={handleShowMore}>
                    <Box sx={{ fontsize: '14px', fontWeight: '700', color: '#666'}}></Box>
                </Button>
            </Box>
        )}
        </>
    )
}

export default ModelList;