export type Student = {
  id: string;
  name: string;
  nim: string;
  phoneNumber: string;
  email: string;
  major: {
    name: string;
    id: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type StudentDataResponse = {
  data: Student;
};
