package com.fullstack.security.config;



import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.fullstack.security.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	@Autowired
	private final JwtService jwtService=null;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		final String authheader = request.getHeader("Authorization");
		final String jwttoken;
		final String name;
		if(authheader==null||!authheader.startsWith("Bearer "))
		{
			filterChain.doFilter(request, response);
			return;
		}
		jwttoken = authheader.substring(7);
		name = jwtService.extractUserName(jwttoken);
		
		
	}
	
}
