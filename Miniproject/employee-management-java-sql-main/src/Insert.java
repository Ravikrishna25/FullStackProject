//
//import java.util.Scanner;
//import java.util.ArrayList;
//import java.util.List;
//
//public class Insert extends Check {
//    public Insert(String port, String databaseName, String userName, String password) {
//        super(port, databaseName, userName, password);
//    }
//
//    public void mainInsert() {
//        Scanner in = new Scanner(System.in);
//
//        boolean loop = true;
//        while (loop) {
//            System.out.println("\n---------------------[Insert]---------------------");
//            System.out.println("\n(1) Insert Employee");
//            System.out.println("(0) Exit");
//            System.out.print("Enter option: ");
//            int num = in.nextInt();
//            Base.LoadingMessage();
//
//            if (num == 1) {
//                insert("employee");
//            } else if (num == 0) {
//                loop = false;
//            } else {
//                loop = true;
//            }
//        }
//    }
//
//    private void insert(String tableName) {
//        Scanner in = new Scanner(System.in);
//        String employeeValue = "";
//        String addressValue = "";
//        String employeeID = "";
//        
//      String contactQuery = "INSERT INTO employeeContactDetails (eId, phoneNumber) VALUES ";
//      List<String> contactNumbers = new ArrayList<>();
//
//        try {
//            boolean loop = true;
//            while (loop) {
//                System.out.print("\nEnter ID: ");
//                String ID = in.next();
//                if (checkID(ID) == false) {
//                    employeeValue += qouteMark(ID) + ", ";
//                    addressValue += qouteMark(ID) + ", ";
//                    employeeID = ID;
//                    loop = false;
//                } else {
//                    System.out.println("\n*Message: ID already exists.");
//                }
//            }
//
//            System.out.print("Enter First Name: ");
//            employeeValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter Last Name: ");
//            employeeValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter Job Title: ");
//            employeeValue += qouteMark(in.next()) + ", ";
//
//            // Birthday
//            loop = true;
//            while (loop) {
//                System.out.print("Enter birthday (like: YYYY-MM-DD): ");
//                String date = in.next();
//                if (checkDate(date)) {
//                    employeeValue += qouteMark(date) + ", ";
//                    loop = false;
//                } else {
//                    System.out.println("\n*Message: Date is wrong, please try again.");
//                }
//            }
//
//            loop = true;
//            while (loop) {
//                System.out.print("Enter Joining date (like: YYYY-MM-DD): ");
//                String doj = in.next();
//                if (checkDate(doj)) {
//                    employeeValue += qouteMark(doj) + ", ";
//                    loop = false;
//                } else {
//                    System.out.println("\n*Message: Date is wrong, please try again.");
//                }
//            }
//
//            loop = true;
//            while (loop) {
//                System.out.print("Enter email: ");
//                String email = in.next();
//                if (checkEmail(email) == false) {
//                    employeeValue += qouteMark(email) + ", ";
//                    loop = false;
//                } else {
//                    System.out.println("\n*Message: Email already exists, please try again.");
//                }
//            }
//            
//            System.out.print("Enter Salary: ");
//            employeeValue += qouteMark(in.next());
//
//            System.out.print("Enter DoorNo: ");
//            addressValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter Street: ");
//            addressValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter Area: ");
//            addressValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter Pincode: ");
//            addressValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter District: ");
//            addressValue += qouteMark(in.next()) + ", ";
//
//            System.out.print("Enter State: ");
//            addressValue += qouteMark(in.next());
//            
//            
//            
//            loop = true;
//          while (loop) {
//              System.out.print("Enter Phone Number (or 'done' to finish): ");
//              String phoneNumber = in.next();
//              if (phoneNumber.equalsIgnoreCase("done")) {
//                  loop = false;
//              } else {
//                  contactQuery += "(" + employeeID + ", " + qouteMark(phoneNumber) + "), ";
//
//              }
//          }
//
//            String employeeQuery = "INSERT INTO employee VALUES (" + employeeValue + ");";
//            connect.prepareStatement(employeeQuery).executeUpdate();
//
//            String addressQuery = "INSERT INTO employeeAddressDetails VALUES (" + addressValue + ");";
//            connect.prepareStatement(addressQuery).executeUpdate();
//
//            
//            contactQuery = contactQuery.substring(0, contactQuery.length() - 2) + ";";
//          System.out.println(contactQuery);
//          connect.prepareStatement(contactQuery).executeUpdate();
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            
//            loop = true;
//            while (loop) {
//                System.out.println("\nAdd Dependent (Y/N)?");
//                String addDependent = in.next();
//                if (addDependent.equalsIgnoreCase("Y")) {
//                    insertDependent(employeeID);
//                } else if (addDependent.equalsIgnoreCase("N")) {
//                    loop = false;
//                }
//            }
//
//            System.out.println("\n#Done");
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//    }
//
//    private void insertDependent(String employeeID) {
//        Scanner in = new Scanner(System.in);
//
//        try {
//            boolean loop = true;
//            while (loop) {
//                System.out.print("\nEnter Dependent Name: ");
//                String dependentName = in.next();
//                System.out.print("Enter Relationship: ");
//                String relationship = in.next();
//
//                loop = true;
//                while (loop) {
//                    System.out.print("Enter Date of Birth (like: YYYY-MM-DD): ");
//                    String dob = in.next();
//                    if (checkDate(dob)) {
//                        loop = false;
//                        System.out.print("Enter Contact Number: ");
//                        String contactNumber = in.next();
//
//                        String dependentQuery = "INSERT INTO employeeDependents (eId, dependentName, relationship, dob, contactNumber) VALUES ("
//                                + qouteMark(employeeID) + ", " + qouteMark(dependentName) + ", " + qouteMark(relationship)
//                                + ", " + qouteMark(dob) + ", " + qouteMark(contactNumber) + ");";
//                        connect.prepareStatement(dependentQuery).executeUpdate();
//                    } else {
//                        System.out.println("\n*Message: Date is wrong, please try again.");
//                    }
//                }
//
//                loop = true;
//                while (loop) {
//                    System.out.println("\nAdd Another Dependent (Y/N)?");
//                    String addAnotherDependent = in.next();
//                    if (addAnotherDependent.equalsIgnoreCase("Y")) {
//                        loop = false;
//                    } else if (addAnotherDependent.equalsIgnoreCase("N")) {
//                        loop = false;
//                        break;
//                    }
//                }
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        }
//    }
//}
//

import java.util.Scanner;
import java.util.ArrayList;
import java.util.List;

public class Insert extends Check {
    public Insert(String port, String databaseName, String userName, String password) {
        super(port, databaseName, userName, password);
    }

    public void mainInsert() {
        Scanner in = new Scanner(System.in);

        boolean loop = true;
        while (loop) {
            System.out.println("\n---------------------[Insert]---------------------");
            System.out.println("\n(1) Insert Employee");
            System.out.println("(0) Exit");
            System.out.print("Enter option: ");
            int num = in.nextInt();
            Base.LoadingMessage();

            if (num == 1) {
                insert("employee");
            } else if (num == 0) {
                loop = false;
            } else {
                loop = true;
            }
        }
    }

    private void insert(String tableName) {
        Scanner in = new Scanner(System.in);
        String employeeValue = "";
        String addressValue = "";
        String employeeID = "";
        
      String contactQuery = "INSERT INTO employeeContactDetails (eId, phoneNumber) VALUES ";
      List<String> contactNumbers = new ArrayList<>();
      List<String> addressQueries = new ArrayList<>();
      
      
        try {
            boolean loop = true;
            while (loop) {
                System.out.print("\nEnter ID: ");
                String ID = in.next();
                if (checkID(ID) == false) {
                    employeeValue += qouteMark(ID) + ", ";
                    addressValue += qouteMark(ID) + ", ";
                    employeeID = ID;
                    loop = false;
                } else {
                    System.out.println("\n*Message: ID already exists.");
                }
            }

            System.out.print("Enter First Name: ");
            employeeValue += qouteMark(in.next()) + ", ";

            System.out.print("Enter Last Name: ");
            employeeValue += qouteMark(in.next()) + ", ";

            System.out.print("Enter Job Title: ");
            employeeValue += qouteMark(in.next()) + ", ";

            // Birthday
            loop = true;
            while (loop) {
                System.out.print("Enter birthday (like: YYYY-MM-DD): ");
                String date = in.next();
                if (checkDate(date)) {
                    employeeValue += qouteMark(date) + ", ";
                    loop = false;
                } else {
                    System.out.println("\n*Message: Date is wrong, please try again.");
                }
            }

            loop = true;
            while (loop) {
                System.out.print("Enter Joining date (like: YYYY-MM-DD): ");
                String doj = in.next();
                if (checkDate(doj)) {
                    employeeValue += qouteMark(doj) + ", ";
                    loop = false;
                } else {
                    System.out.println("\n*Message: Date is wrong, please try again.");
                }
            }

            loop = true;
            while (loop) {
                System.out.print("Enter email: ");
                String email = in.next();
                if (checkEmail(email) == false) {
                    employeeValue += qouteMark(email) + ", ";
                    loop = false;
                } else {
                    System.out.println("\n*Message: Email already exists, please try again.");
                }
            }
            
            System.out.print("Enter Salary: ");
            employeeValue += qouteMark(in.next());

            int addressCount = 1;
            loop = true;
            while (loop) {
                System.out.print("Enter DoorNo (Address " + addressCount + "): ");
                String doorNo = in.next();

                System.out.print("Enter Street (Address " + addressCount + "): ");
                String street = in.next();

                System.out.print("Enter Area (Address " + addressCount + "): ");
                String area = in.next();

                System.out.print("Enter Pincode (Address " + addressCount + "): ");
                String pincode = in.next();

                System.out.print("Enter District (Address " + addressCount + "): ");
                String district = in.next();

                System.out.print("Enter State (Address " + addressCount + "): ");
                String state = in.next();

                String addressQuery = "INSERT INTO employeeAddressDetails (eId, doorNo, street, area, pincode, district, state) VALUES ("
                        + qouteMark(employeeID) + ", " + qouteMark(doorNo) + ", " + qouteMark(street) + ", "
                        + qouteMark(area) + ", " + qouteMark(pincode) + ", " + qouteMark(district) + ", "
                        + qouteMark(state) + ");";
                addressQueries.add(addressQuery);

                System.out.println("Add Another Address (Y/N)?");
                String addAnotherAddress = in.next();
                if (addAnotherAddress.equalsIgnoreCase("N")) {
                    loop = false;
                } else {
                    addressCount++;
                }
            }

            
            
            
            
            
            
            
            
            
            
            
            
            loop = true;
            
            
          while (loop) {
              System.out.print("Enter Phone Number (or 'done' to finish): ");
              String phoneNumber = in.next();
              if (phoneNumber.equalsIgnoreCase("done")) {
                  loop = false;
              } else {
                  contactQuery += "(" + employeeID + ", " + qouteMark(phoneNumber) + "), ";

              }
          }

            String employeeQuery = "INSERT INTO employee VALUES (" + employeeValue + ");";
            connect.prepareStatement(employeeQuery).executeUpdate();

            for (String addressQuery : addressQueries) {
                connect.prepareStatement(addressQuery).executeUpdate();
            }


            
            contactQuery = contactQuery.substring(0, contactQuery.length() - 2) + ";";
          System.out.println(contactQuery);
          connect.prepareStatement(contactQuery).executeUpdate();
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            loop = true;
            while (loop) {
                System.out.println("\nAdd Dependent (Y/N)?");
                String addDependent = in.next();
                if (addDependent.equalsIgnoreCase("Y")) {
                    insertDependent(employeeID);
                } else if (addDependent.equalsIgnoreCase("N")) {
                    loop = false;
                }
            }

            System.out.println("\n#Done");
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    private void insertDependent(String employeeID) {
        Scanner in = new Scanner(System.in);

        try {
            boolean loop = true;
            while (loop) {
                System.out.print("\nEnter Dependent Name: ");
                String dependentName = in.next();
                System.out.print("Enter Relationship: ");
                String relationship = in.next();

                loop = true;
                while (loop) {
                    System.out.print("Enter Date of Birth (like: YYYY-MM-DD): ");
                    String dob = in.next();
                    if (checkDate(dob)) {
                        loop = false;
                        System.out.print("Enter Contact Number: ");
                        String contactNumber = in.next();

                        String dependentQuery = "INSERT INTO employeeDependents (eId, dependentName, relationship, dob, contactNumber) VALUES ("
                                + qouteMark(employeeID) + ", " + qouteMark(dependentName) + ", " + qouteMark(relationship)
                                + ", " + qouteMark(dob) + ", " + qouteMark(contactNumber) + ");";
                        connect.prepareStatement(dependentQuery).executeUpdate();
                    } else {
                        System.out.println("\n*Message: Date is wrong, please try again.");
                    }
                }

                loop = true;
                while (loop) {
                    System.out.println("\nAdd Another Dependent (Y/N)?");
                    String addAnotherDependent = in.next();
                    if (addAnotherDependent.equalsIgnoreCase("Y")) {
                        loop = false;
                    } else if (addAnotherDependent.equalsIgnoreCase("N")) {
                        loop = false;
                        break;
                    }
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}

