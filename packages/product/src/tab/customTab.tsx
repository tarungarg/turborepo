import * as React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { TabContext, TabPanel } from '@material-ui/lab'
import './tab.css'

interface TabProps {
  data: { headers: string[]; descriptions: string[] }
  defaultValue: string
}

const CustomTab = ({ data, defaultValue }: TabProps) => {
  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className="mds-tabs-container">
      <div className="mdc-tab-bar" role="tablist">
        <div className="mdc-tab-scroller">
          <div className="mdc-tab-scroller__scroll-area">
            <div className="mdc-tab-scroller__scroll-content"></div>
            <Box sx={{ width: '100%' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs
                    textColor="inherit"
                    TabIndicatorProps={{
                      style: {
                        backgroundColor: 'red',
                      },
                    }}
                    indicatorColor="secondary"
                    value={value}
                    onChange={handleChange}
                    centered
                  >
                    {data?.headers?.map((header, index) => {
                      return (
                        <Tab
                          key={`tabHeader${index}`}
                          className="mdc-tab mdc-tab__text-label lg:f-24-fw-500-lh-14 sm:f-10-fw-500-lh-14"
                          label={header}
                          value={`${index}`}
                        />
                      )
                    })}
                  </Tabs>
                </Box>
                {data?.descriptions?.map((desc, index) => {
                  return (
                    <TabPanel
                      key={`tabSummary${index}`}
                      value={`${index}`}
                      className="mdc-tab-content lg:f-18-fw-300-lh-32 sm:f-8-fw-300-lh-14"
                    >
                      {desc}
                    </TabPanel>
                  )
                })}
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomTab
