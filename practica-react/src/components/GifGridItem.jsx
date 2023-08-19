import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const GifGridItem = ({ gif }) => {
  const { url, title, username, date } = gif;
  return (
    <div className="cardContenedor">
      <Card className="cardCuerpo" sx={{ maxWidth: 345 }}>
        <CardHeader
          className="cardCabeza"
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia component="img" image={url} alt={title} />
        <CardContent>
          <Typography variant="body2" color="" className="cardUsuario">
            {username ? username : "anonimo"}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
          {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
          <IconButton aria-label="favorite">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default GifGridItem;
