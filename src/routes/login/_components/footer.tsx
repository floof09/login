import React from "react"
import {Text} from '@mantine/core'

const Footer: React.FC = () => {
    return (
        <div className="text-center mt-10 sm:mb-12 md:mb-16 ">
          <Text size="md" c="gray.7" fw={500} className="mb-2 sm:mb-4 md:mb-8 ">
            Powered by
          </Text>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {/* LEFT CROP*/}
            <div style={{ 
              width: '80px', 
              height: '30px', 
              overflow: 'hidden',
            }}>
              <img
                src="/Schuler_Logo.png"
                alt="Left"
                style={{
                  height: 'auto',
                  width: '150px',
                  display: 'block',
                  marginLeft: '-60px',
                    marginTop: '2px'

                }}

              />
            </div>

            {/* RIGHT CROP - Track */}
            <div style={{ 
              width: '70px', 
              height: '20px', 
              overflow: 'hidden',
              marginTop: '9px',
              marginLeft: '-8px',

            }}>
              <img
                src="/Schuler_Logo.png"
                alt="Track"
                style={{
                  height: 'auto',
                  width: '150px',
                  display: 'block',
                  marginLeft: '-58px',
                  marginTop: '-26px',
                }}
              />
            </div>
          </div>
        </div>
    )
        };
        export default Footer;
