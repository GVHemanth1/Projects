package com.example.RestJobApp.aop;


import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class PerformanceMonitorAspect {

    public static final org.slf4j.Logger LOGGER = LoggerFactory.getLogger(PerformanceMonitorAspect.class);

    @Around("execution(* com.example.RestJobApp.service.JobService.*(..))")
    public Object monitorTime(ProceedingJoinPoint proceedingJoinPoint) throws Throwable {

        long start = System.currentTimeMillis();

        Object object = proceedingJoinPoint.proceed();

        long end = System.currentTimeMillis();

        LOGGER.info("Time taken for execution : " + proceedingJoinPoint.getSignature().getName() + " : " + (end - start) + " ms.");

        return object;
    }

}
