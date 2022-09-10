import { styled } from '@mui/material/styles';

function TitleCard(prop:any) {

    const ScaledImage = styled('div')(({ theme }) => ({
        padding: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
          fontSize: 10
        },
        [theme.breakpoints.up('md')]: {
          
          fontSize: 14
        },
        [theme.breakpoints.up('lg')]: {
          fontSize: 18
        },
      }));

    return (
        <ScaledImage>
            <p>{prop.title}</p>
        </ScaledImage>
    );
}

export default TitleCard