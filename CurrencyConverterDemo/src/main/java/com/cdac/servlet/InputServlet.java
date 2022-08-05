package com.cdac.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/getdata")
public class InputServlet extends HttpServlet {

	protected void doGet(HttpServletRequest request, 
HttpServletResponse response) throws ServletException, IOException 
	{
		String choice = request.getParameter("radCurrency");
		int amt = Integer.parseInt(request.getParameter("txtAmount"));
		String pageUrl = "";
		
		switch(choice) {
			case "d":
					pageUrl = "dollar?amount="+amt;
					break;
			case "p":
					pageUrl = "pound?amount="+amt;
					break;		
		}
		
		//client side redirection
		response.sendRedirect(pageUrl);
	}
}






