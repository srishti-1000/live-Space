import React, { useState } from "react";
import SelectableCard from "../common components/SelectableCard";
import { Box, Modal, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function Step0({ selectedCard, setSelectedCard }) {
  const [openModal, setOpenModal] = useState(false);

  const cardData = [
    {
      id: 1,
      image:
        "https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/kitchen-price-calculator-1623054114-0nQu5/layout-of-kitchen-1623054142-c9zFe/l-shaped-m-1623057532-DgFa7.png",
      name: "L-shaped",
    },
    {
      id: 2,
      image:
        "https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/kitchen-price-calculator-1623054114-0nQu5/layout-of-kitchen-1623054142-c9zFe/straight-m-1623057538-SA27W.png",
      name: "Straight",
    },
    {
      id: 3,
      image:
        "https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/kitchen-price-calculator-1623054114-0nQu5/layout-of-kitchen-1623054142-c9zFe/u-shaped-m-1623057541-zD2TH.png",
      name: "U-shaped",
    },
    {
      id: 4,
      image:
        "https://d3gq2merok8n5r.cloudfront.net/stage2-1623054096-6N9Ti/kitchen-price-calculator-1623054114-0nQu5/layout-of-kitchen-1623054142-c9zFe/parallel-m-1623057535-jekGc.png",
      name: "Parallel",
    },
  ];

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  
  return (
    <>
      <div className="kitchenLayoutContainer">
        <h3 className="kitchenHeader">Select the layout of your kitchen</h3>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 0,
          }}
        >
          <h3 className="knowMore">
            Want to know more. 
            <span onClick={handleOpenModal}> Check here</span>
          </h3>
        </div>
        <div className="card-container">
          {cardData.map((card) => (
            <SelectableCard
              key={card.id}
              image={card.image}
              name={card.name}
              isSelected={selectedCard === card.id}
              onSelect={() => setSelectedCard(card.id)}
            />
          ))}
        </div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "60vh",
            maxWidth: 750,
            backgroundColor: "#fff",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            outline: "none",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Why it matters</Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography sx={{ mt: 2 }}>
            The cost of your kitchen varies from one layout to another. The
            shape of the kitchen also determines the cost and space for
            cabinets, countertops, and accessories.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
