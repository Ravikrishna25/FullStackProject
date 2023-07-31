
import java.time.LocalDate;
import java.time.Period;
import java.util.Scanner;

public class Select extends Base {

	// for pass data to Base constructor
	public Select(String port, String databaseName, String userName, String password) {
		super(port, databaseName, userName, password);
	}
	
	// main method for select
	public void mainSelect() {
		Scanner in = new Scanner(System.in);
	
		boolean loop = true;
		while(loop) {
//			
			 System.out.println("\n---------------------[Select]---------------------");
	            System.out.println("\n(1) Show all employees");
	            System.out.println("(2) Show one employee");
	            System.out.println("(3) Show highest salary employee");
	            System.out.println("(4) Show lowest salary employee");
	            System.out.println("(5) Show Lead to Low employee Salary");
	            System.out.println("(6) Show Dependents");
	            System.out.println("(7) Show address details");
	            System.out.println("(8) Show contact details");
	            System.out.println("(9) Show Number of years employee Worked?");
	            System.out.println("(0) Exit");
            System.out.print("Enter option: ");
			int num = in.nextInt();
			Base.LoadingMessage();
			
			if(num == 1) {
				select("employee", "*","all");
			}	
			else if(num == 2) {
				System.out.print("\nEnter employee ID: ");
				String id = in.next();
				select("employee", "*",id);
			}
			else if (num == 3) {
                selectHighestSalaryEmployee();
            } else if (num == 4) {
                selectLowestSalaryEmployee();
            } 
            else if (num == 5) {
                selectLeadToLowSalaryEmployee();
            } 
            else if (num == 6) {
            	 System.out.print("\nEnter employee ID: ");
                 String id = in.next();
                 selectDependents(id);
            } 
            else if (num == 7) {
                System.out.print("\nEnter employee ID: ");
                String id = in.next();
                selectAddressDetails(id);
            } else if (num == 8) {
                System.out.print("\nEnter employee ID: ");
                String id = in.next();
                selectContactDetails(id);
            }
            else if (num == 9) {
                System.out.print("\nEnter employee ID: ");
                String id = in.next();
                calculateYearsWorked(id);
            } 
			
			else if(num == 0)
				loop = false;
			else
				loop = true;	
		}
	}
	
	// Process for select
	private void select(String tableName, String columnsName , String whereCondtion ) {
		int check = 0;
		boolean pass = true;
		try{
			if(whereCondtion.equals("all")) {
				resultSet = statement.executeQuery(" select " + columnsName +  "  from " + tableName);
			}				
			else {
				if(checkID(whereCondtion))
					resultSet = statement.executeQuery(" select " + columnsName +  "  from " + tableName + " where eId = " + Integer.parseInt(whereCondtion));
				else {
					System.out.println("\n*Message: ID not found");
					pass = false;
				}				
			}
				
			
			if(pass) {
				System.out.println("\n-----------------------------------------------------------------------------------------");
				System.out.println("ID	| Name | job Title | Birthday | Joined Date | Email | Salary");
				System.out.println("-----------------------------------------------------------------------------------------");
				while(resultSet.next()) {
					check = 1;
					int eid = resultSet.getInt("eId");
					String fname = resultSet.getString("firstName");
					String lname = resultSet.getString("lastName");
					String jobTitle = resultSet.getString("jobTitle");
					String BOD  = resultSet.getString("DOB");
					String DOJ = resultSet.getString("DOJ");
					String email = resultSet.getString("email");
					String salary = resultSet.getString("salary");
					System.out.println(eid + "	| " + fname + " " + lname + " | "+ jobTitle+" | " + BOD + " | "+DOJ+" | " + email+" | "+salary);
				}
				if(check == 0 )
					System.out.println("\n*Message: Database is empty");
				System.out.println("-----------------------------------------------------------------------------------------");
			}
		}
		catch(Exception ex) { System.out.println("\n*Message: info of connection is wrong, again."); }
	}
	 private void selectHighestSalaryEmployee() {
	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employee ORDER BY salary DESC LIMIT 1");

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Highest Salary Employee Details:");
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                int eid = resultSet.getInt("eId");
	                String fname = resultSet.getString("firstName");
	                String lname = resultSet.getString("lastName");
	                String jobTitle = resultSet.getString("jobTitle");
//	                String city = resultSet.getString("city");
	                String BOD = resultSet.getString("DOB");
	                String doj = resultSet.getString("DOJ");
	                String email = resultSet.getString("email");
	                double salary = resultSet.getDouble("salary");

	                System.out.println("Employee ID: " + eid);
	                System.out.println("Name: " + fname + " " + lname);
	                System.out.println("Job Title: " + jobTitle);
//	                System.out.println("City: " + city);
	                System.out.println("Birthday: " + BOD);
	                System.out.println("Joined Date: " + doj);
	                System.out.println("Email: " + email);
	                System.out.println("Salary: " + salary);
	            }
	            System.out.println("---------------------------------------------");
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }
	 private void selectLeadToLowSalaryEmployee() {
	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employee ORDER BY salary DESC ");

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Highest To Lowest Salary Employee Details:");
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                int eid = resultSet.getInt("eId");
	                String fname = resultSet.getString("firstName");
	                String lname = resultSet.getString("lastName");
	                String jobTitle = resultSet.getString("jobTitle");
//	                String city = resultSet.getString("city");
	                String BOD = resultSet.getString("DOB");
	                String doj = resultSet.getString("DOJ");
	                String email = resultSet.getString("email");
	                double salary = resultSet.getDouble("salary");

	                System.out.println("Employee ID: " + eid);
	                System.out.println("Name: " + fname + " " + lname);
	                System.out.println("Job Title: " + jobTitle);
//	                System.out.println("City: " + city);
	                System.out.println("Birthday: " + BOD);
	                System.out.println("Joined Date: " + doj);
	                System.out.println("Email: " + email);
	                System.out.println("Salary: " + salary);
	            }
	            System.out.println("-------------------------------------------------");
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }

	    private void selectLowestSalaryEmployee() {

	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employee ORDER BY salary ASC LIMIT 1");

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Lowest Salary Employee Details:");
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                int eid = resultSet.getInt("EID");
	                String fname = resultSet.getString("firstName");
	                String lname = resultSet.getString("lastName");
	                String jobTitle = resultSet.getString("jobTitle");
//	                String city = resultSet.getString("city");
	                String BOD = resultSet.getString("DOB");
	                String doj = resultSet.getString("DOJ");
	                String email = resultSet.getString("email");
	                double salary = resultSet.getDouble("salary");

	                System.out.println("Employee ID: " + eid);
	                System.out.println("Name: " + fname + " " + lname);
	                System.out.println("Job Title: " + jobTitle);
//	                System.out.println("City: " + city);
	                System.out.println("Birthday: " + BOD);
	                System.out.println("Joined Date: " + doj);
	                System.out.println("Email: " + email);
	                System.out.println("Salary: " + salary);
	            }
	            System.out.println("-------------------------------------------------");
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }
	    private void selectDependents(String employeeID) {
	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employeeDependents WHERE eId = " + employeeID);

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Dependents for Employee ID: " + employeeID);
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                String dependentName = resultSet.getString("dependentName");
	                String relationship = resultSet.getString("relationship");
	                String dob = resultSet.getString("dob");
	                String contactNumber = resultSet.getString("contactNumber");

	                System.out.println("Dependent Name: " + dependentName);
	                System.out.println("Relationship: " + relationship);
	                System.out.println("Date of Birth: " + dob);
	                System.out.println("Contact Number: " + contactNumber);
	                System.out.println("-------------------------------------------------");
	            }
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }
private void selectAddressDetails(String employeeID) {
	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employeeAddressDetails WHERE eId = " + employeeID);

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Address Details for Employee ID: " + employeeID);
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                String doorNo = resultSet.getString("doorNo");
	                String street = resultSet.getString("street");
	                String area = resultSet.getString("area");
	                String pincode = resultSet.getString("pincode");
	                String district = resultSet.getString("district");
	                String state = resultSet.getString("state");

	                System.out.println("Door No: " + doorNo);
	                System.out.println("Street: " + street);
	                System.out.println("Area: " + area);
	                System.out.println("Pincode: " + pincode);
	                System.out.println("District: " + district);
	                System.out.println("State: " + state);
	                System.out.println("-------------------------------------------------");
	            }
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }

	    private void selectContactDetails(String employeeID) {
	        try {
	            resultSet = statement.executeQuery("SELECT * FROM employeeContactDetails WHERE eId = " + employeeID);

	            System.out.println("\n---------------------------------------------");
	            System.out.println("Contact Details for Employee ID: " + employeeID);
	            System.out.println("---------------------------------------------");
	            while (resultSet.next()) {
	                String phoneNumber = resultSet.getString("phoneNumber");

	                System.out.println("Phone Number: " + phoneNumber);
	            }
	            System.out.println("-------------------------------------------------");
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }
	    private void calculateYearsWorked(String employeeID) {
	        try {
	            resultSet = statement.executeQuery("SELECT doj FROM employee WHERE eId = " + employeeID);
	            if (resultSet.next()) {
	                String doj = resultSet.getString("doj");
	                LocalDate joinDate = LocalDate.parse(doj);
	                LocalDate currentDate = LocalDate.now();
	                Period period = Period.between(joinDate, currentDate);
	                int yearsWorked = period.getYears();
	                System.out.println("\nEmployee ID: " + employeeID);
	                System.out.println("Years Worked: " + yearsWorked + " years");
	            } else {
	                System.out.println("\n*Message: Employee ID not found");
	            }
	        } catch (Exception ex) {
	            System.out.println("\n*Message: Info of connection is wrong, please try again.");
	        }
	    }
}

