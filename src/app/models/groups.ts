interface Group {
  id: number;
  name: string;
  link: string;
  description: string;
  latitude: number;
  longitude: number;
}

type GroupCreationModel = Omit<Group, 'id'>;

export { Group, GroupCreationModel };
