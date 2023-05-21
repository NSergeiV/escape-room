
export type FormElementProps = {
	sort: string;
	itemName: string;
	choiceNumber: number;
	heandleInput: (event: React.FormEvent<HTMLInputElement>) => void;
}

export type QuestsProps = {
	quests: QuestDataProps[];
}

export type CardСollectionProps = {
	cardData: QuestDataProps;
}

type QuestDataProps = {
	id: string;
	title: string;
	previewImg: string;
	previewImgWebp: string;
	level: string;
	type: string;
	peopleMinMax: number[];
}

export type QuestsReservationProps = {
	questsReservation: QuestReservationProps[];
}

export type QuestReservedProps = {
	cardDataReservation: QuestReservationProps;
}

type QuestReservationProps = {
	date: string;
	time: string;
	contactPerson: string;
	phone: string;
	withChildren: boolean;
	peopleCount: number;
	id: string;
	location: {
		address: string;
		coords: number[];
	};
	quest: {
		id: string;
		title: string;
		previewImg: string;
		previewImgWebp: string;
		level: string;
		type: string;
		peopleMinMax: number[];
	};
}

export type QuestsForBookingProps = QuestForBookingProps[];

type QuestForBookingProps = {
	id: string;
	location: {
		address: string;
		coords: number[];
	};
	slots: {
		today: [{
			time: string;
			isAvailable: boolean;
		}];
		tomorrow: [{
			time: string;
			isAvailable: boolean;
		}];
	};
}

export type MarkerComponentProps = {
	positionMarker: number[];
	addressMardker: string;
	markerId: string;
	markerIdChoice: string | null;
}

export type FormTimeProps = {
	time: string;
	available: boolean;
}
