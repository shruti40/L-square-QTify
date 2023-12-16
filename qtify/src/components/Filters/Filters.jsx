import React, { useState } from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import styles from "./Filters.module.css";

function TabPanel(props) {
    const {children, value, index, ...other} = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box sx={{ p:3 }}>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    )
}

function Filters({ filters, selectedFilterIndex, setSelectedFilterIndex }) {
    // const [newValue, setNewValue] = useState(0);

    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue)
    }
    const allyporps = ({index}) => {
        return {
            id: `simple-tab-${index}`,
            "aria-controls": `simple-tabpanel-${index}`
        }
    }

    return (
        <div>
            <Tabs
                value={selectedFilterIndex}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                    style: {
                        backgroundColor: "var(--color-primary)"
                    }
                }}
            >
                {
                    filters.map((ele, idx) => (
                        <Tab className={styles.tab} label={ele.label} {...allyporps(idx)}></Tab>
                    ))
                }
            </Tabs>

            {
                    filters.map((ele, idx) => (
                        <TabPanel value={ele.label} index={idx}></TabPanel>
                    ))
            }
        </div>
    )
}

export default Filters;