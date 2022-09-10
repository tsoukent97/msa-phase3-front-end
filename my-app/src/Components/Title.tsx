import { styled } from '@mui/material/styles';

function TitleCard(prop:any) {

    const ScaledImage = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
          fontSize: 12
        },
        [theme.breakpoints.up('md')]: {
          
          fontSize: 24
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 36
        },
      }));

    return (
        <ScaledImage>
            <p>Breed: {prop.title}</p>
        </ScaledImage>
    );
}

export default TitleCard