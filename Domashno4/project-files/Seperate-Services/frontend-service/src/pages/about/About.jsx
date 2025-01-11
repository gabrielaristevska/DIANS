import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import NavigationBar from "../../components/NavigationBar";
import bgImage from '../../assets/bg-images/technology-bgimage-2.png'

function About() {
    return (
        // Main container
        <Box sx={{
            width: '100%',
            pb: '80px',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
        >
            <NavigationBar />

            {/* Landing Content */}
            <Box sx={{ width: '780px', margin: '80px auto 0' }}>
                <Typography variant="h1" sx={{fontSize: '72px', color: '#272727', mb: '16px' }}>About the Project</Typography>
            </Box>

            {/* Content Box */}
            <Box
                sx={{
                    width: '780px',
                    p: '64px',
                    backgroundColor: "#272727",
                    margin: '0 auto',
                    borderRadius: "12px",
                    mt: '32px'
                }}
            >
                <p
                    style={{
                        color: '#F4F4F4',
                        textAlign: 'left'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at odio varius, tincidunt erat at, tempor turpis. In lorem sapien, gravida ac hendrerit ac, vulputate quis turpis. Nam interdum enim et interdum auctor. Vivamus lorem neque, finibus ac posuere vel, tincidunt eu dui. Cras ac mollis lorem. Quisque euismod sagittis nibh ut cursus. Sed semper tempor lectus eu consectetur.
                    Ut tempus est a diam ultrices, in rhoncus arcu iaculis. Morbi quis neque dui. Suspendisse quis efficitur felis, aliquam finibus nibh. Sed nunc lorem, commodo dignissim urna vitae, cursus tristique lorem. Phasellus accumsan diam sit amet nisi gravida pharetra quis a lorem. Pellentesque eu ornare orci, in accumsan ex.
                    <br/> <br/>
                    Sed ut lacinia nulla. Nam faucibus iaculis arcu ut auctor. Duis nisl massa, congue sed gravida ut, tempus ac ligula. Praesent volutpat sem a vehicula mollis. Ut arcu risus, condimentum et auctor id, sollicitudin et tellus. Etiam fermentum, enim nec mattis efficitur, odio enim feugiat massa, sed fringilla lectus augue eget libero. Etiam eget fringilla elit, non auctor metus. Etiam a aliquet metus. Maecenas imperdiet nisl mauris, quis scelerisque erat interdum eu. Donec ullamcorper eros leo, et maximus est condimentum sit amet.
                    <br/> <br/>
                    Fusce lacinia pellentesque enim sed suscipit. Praesent ligula turpis, maximus id tempor vitae, commodo a purus. Mauris placerat egestas orci gravida pretium. Etiam ullamcorper in est ac finibus. Suspendisse a pretium quam. Integer nulla lacus, vulputate non posuere eu, egestas et arcu. Nunc et lorem tincidunt, porttitor eros vitae, tincidunt turpis. Maecenas ultricies, arcu et porta faucibus, tortor ex aliquet leo, id finibus ipsum ex sed nisi. Morbi porttitor vel tortor ultrices lobortis. Morbi fringilla pulvinar nulla. Fusce eget odio aliquam, dignissim diam tempus, bibendum arcu. Donec efficitur purus sed nulla egestas, vel tincidunt neque mattis. Nam ac neque quis velit pulvinar consequat. Maecenas tristique luctus aliquet. Nullam efficitur, nisl at tempus convallis, massa dui consectetur odio, condimentum scelerisque est nunc a libero.
                    <br/> <br/>
                    Vivamus maximus ultricies pretium. Nulla elementum turpis nec sapien vestibulum consequat. Aliquam laoreet odio eu pretium luctus. Sed hendrerit dictum ex non mollis. Integer at molestie tellus. In fringilla consequat tincidunt. In eu fermentum augue. Donec enim ante, varius quis dignissim id, vestibulum id odio. Donec suscipit sodales purus quis eleifend. Aenean pharetra accumsan vulputate. Vestibulum et ipsum id sem mollis interdum. Donec eros purus, imperdiet a tellus ut, porttitor fringilla nisl. Nunc in justo tellus. Proin euismod porttitor cursus. Etiam fringilla, odio dapibus pellentesque interdum, tortor ipsum luctus erat, quis laoreet leo odio ut risus. Sed hendrerit ex nec dui tincidunt, condimentum vestibulum libero lobortis.
                </p>
            </Box>
        </Box>
    );
}

export default About;