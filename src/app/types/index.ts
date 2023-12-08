export interface Board {
  board_id: string;
  created_at: Date;
  created_by: string;
  board_title: string;
}

export interface Card {
  card_id: string;
  created_at: Date;
  created_by: string;
  collaborators: string[];
  card_title: string;
  card_desc: string;
  board_id: string;
}

export interface AddCard {
  card_title: string;
  card_desc: string;
  board_id: string;
}

export interface EditBoardProps {
  board_id: string;
  board_title: string;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface BoardWithCards extends Board {
  cards: Card[];
}

export interface AddNewCardProps {
  board_id: string;
}

export type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export interface EditCardProps {
  card: Card;
  handleClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

